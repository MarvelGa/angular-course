import { TransformToDatetimePipe } from "../transform-to-datetime.pipe";

describe('(TransformToDatetimePipe)', ()=>{

  it('should transform milliseconds to date', ()=>{
   const pipe = new TransformToDatetimePipe();
   let result = pipe.transform(1668898800000);
   expect(result).toEqual('20 Nov, 2022');
  });

});
