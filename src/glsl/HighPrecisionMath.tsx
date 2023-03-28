export default /*glsl*/`
  //---------------------------------------------------------------------------
  //--- High Precision float ver: 1.000 ---------------------------------------
  //---------------------------------------------------------------------------

  // helper functions (internals)
  vec3 hp32_nor(vec3 c)          // bubble sort c coordinates desc by magnitude
      {
      float x;
      if (abs(c.x)<abs(c.y)){ x=c.x; c.x=c.y; c.y=x; }
      if (abs(c.x)<abs(c.z)){ x=c.x; c.x=c.z; c.z=x; }
      if (abs(c.y)<abs(c.z)){ x=c.y; c.y=c.z; c.z=x; }

      return c;
      }
  vec3 hp32_err(vec3 c,vec3 e)  // c+=e; apply rounding error e corection to c
      {
      float q;
      q=c.x; c.x+=e.x; e.x=e.x-(c.x-q);
      q=c.x; c.x+=e.y; e.y=e.y-(c.x-q);
      q=c.x; c.x+=e.z; e.z=e.z-(c.x-q);
      q=c.y; c.y+=e.x; e.x=e.x-(c.y-q);
      q=c.y; c.y+=e.y; e.y=e.y-(c.y-q);
      q=c.y; c.y+=e.z; e.z=e.z-(c.y-q);
      q=c.z; c.z+=e.x; e.x=e.x-(c.z-q);
      q=c.z; c.z+=e.y; e.y=e.y-(c.z-q);
      q=c.z; c.z+=e.z; e.z=e.z-(c.z-q);
      c = hp32_nor(c);
      return c;
      }
  // void hp32_split(vec3 h,vec3 l,vec3 a) // (h+l)=a; split mantissas to half
  //     {
  //     const float n=8193.0; // 10000000000001 bin uses ~half of mantissa bits
  //     h=a*n;  // this shifts the a left by half of mantissa (almost no rounding yet)
  //     l=h-a;  // this will round half of mantissa as h,a have half of mantisa bits exponent difference
  //     h-=l;   // this will get rid of the n* part from number leaving just high half of mantisa from original a
  //     l=a-h;  // this is just the differenc ebetween original a and h ... so lower half of mantisa beware might change sign
  //     }
  //---------------------------------------------------------------------------
  // normal api
  vec3 hp32_set(float a){ return vec3(a,0.0,0.0); }                   // float -> vec2
  float hp32_get(vec3 a){ float c; c=a.z+a.y; c+=a.x; return c; }     // vec2 -> float
  vec3 hp32_add(vec3 a,vec3 b)                                        // = a+b
      {
      // c=a+b; addition
      vec3 c=a+b,e; float q;
      // e=(a+b)-c; rounding error
      c.x=a.x+b.x; e.x=c.x-a.x; e.x-=b.x;
      c.y=a.y+b.y; e.y=c.y-a.y; e.y-=b.y;
      c.z=a.z+b.z; e.z=c.z-a.z; e.z-=b.z;
      e=-e; 
      return hp32_err(c,e);
      }
  vec3 hp32_sub(vec3 a,vec3 b)                                        // = a-b
      {
      // c=a-b; substraction
      vec3 c=a-b,e; float q;
      // e=(a-b)-c; rounding error
      c.x=a.x+b.x; e.x=c.x-a.x; e.x+=b.x;
      c.y=a.y+b.y; e.y=c.y-a.y; e.y+=b.y;
      c.z=a.z+b.z; e.z=c.z-a.z; e.z+=b.z;
      e=-e; 
      return hp32_err(c,e);
      }
  vec3 hp32_mul_half(vec3 a,vec3 b)                                   // = a*b where a,b are just half of mantissas !!! internal call do not use this !!!
      {
      //  c = (a.x+a.y+a.z)*(b.x+b.y+b.z)     // multiplication of 2 expresions
      //  c = (a.x*b.x)+(a.x*b.y)+(a.x*b.z)   // expanded
      //     +(a.y*b.x)+(a.y*b.y)+(a.y*b.z)
      //     +(a.z*b.x)+(a.z*b.y)+(a.z*b.z)
      //  c = (a.x*b.x)                       // ordered desc by magnitude (x>=y>=z)
      //     +(a.x*b.y)+(a.y*b.x)
      //     +(a.x*b.z)+(a.z*b.x)+(a.y*b.y)
      //     +(a.y*b.z)+(a.z*b.y)
      //     +(a.z*b.z)
      vec3 c,e,f; float q,r;
      // c=a*b; (e,f)=(a*b)-c; multiplication
      c.x=(a.x*b.x);
      r=(a.x*b.y); q=c.x; c.x+=r; e.x=r-(c.x-q);
      r=(a.y*b.x); q=c.x; c.x+=r; e.y=r-(c.x-q);
      c.y=(a.x*b.z);
      r=(a.z*b.x); q=c.y; c.y+=r; e.z=r-(c.y-q);
      r=(a.y*b.y); q=c.y; c.y+=r; f.x=r-(c.y-q);
      c.z=(a.y*b.z);
      r=(a.z*b.y); q=c.z; c.z+=r; f.y=r-(c.z-q);
      r=(a.z*b.z); q=c.z; c.z+=r; f.z=r-(c.z-q);
      e=+hp32_add(e,f); 
      return hp32_err(c,e);
      }
  vec3 hp32_mul(vec3 a,vec3 b)                                        // = a*b
      {
      vec3 ah,al,bh,bl,c;
      // split operands to halves of mantissa
      // hp32_split(ah,al,a);
      // hp32_split(bh,bl,b);

      const float n=8193.0; // 10000000000001 bin uses ~half of mantissa bits
      ah=a*n;  // this shifts the a left by half of mantissa (almost no rounding yet)
      al=ah-a;  // this will round half of mantissa as h,a have half of mantisa bits exponent difference
      ah-=al;   // this will get rid of the n* part from number leaving just high half of mantisa from original a
      al=a-ah;  // this is just the differenc ebetween original a and h ... so lower half of mantisa beware might change sign
      
      bh=b*n;  // this shifts the a left by half of mantissa (almost no rounding yet)
      bl=bh-b;  // this will round half of mantissa as h,a have half of mantisa bits exponent difference
      bh-=bl;   // this will get rid of the n* part from number leaving just high half of mantisa from original a
      bl=b-bh;  // this is just the differenc ebetween original a and h ... so lower half of mantisa beware might change sign

      //  c = (ah+al)*(bh+bl) = ah*bh + ah*bl + al*bh + al*bl
      c=           hp32_mul_half(ah,bh) ;
      c=hp32_add(c,hp32_mul_half(ah,bl));
      c=hp32_add(c,hp32_mul_half(al,bh));
      c=hp32_add(c,hp32_mul_half(al,bl));
      return c;
      }
  //---------------------------------------------------------------------------
`