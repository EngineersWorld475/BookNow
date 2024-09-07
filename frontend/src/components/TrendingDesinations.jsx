import React from 'react';

const TrendingDesinations = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row px-10 gap-5 md:h-80 mb-5 justify-center">
        <div className="flex flex-col justify-center w-full md:w-1/2 rounded-lg overflow-hidden bg-red-500 object-cover relative">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o="
            alt="img_1"
          />
          <div class="absolute inset-0 bg-black bg-opacity-35"></div>
          <div className="flex flex-row absolute top-5 left-5 gap-3">
            <h1 className="text-white font-bold text-2xl shadow-text-md">
              Ooty
            </h1>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt="india"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 rounded-lg overflow-hidden bg-green-500 relative">
          <img
            src="https://cf.bstatic.com/xdata/images/city/600x600/684590.jpg?k=db4eac310a0ff0cd53d90b55a2a834e1cca731891a608073d78619720c469079&o="
            alt="img_2"
          />
          <div class="absolute inset-0 bg-black bg-opacity-35"></div>

          <div className="flex flex-row absolute top-5 left-5 gap-3">
            <h1 className="text-white font-bold text-2xl shadow-text-md">
              Coimbatore
            </h1>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg=="
              alt="india"
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default TrendingDesinations;
