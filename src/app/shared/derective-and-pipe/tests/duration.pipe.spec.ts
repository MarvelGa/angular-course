import { DurationPipe} from "../duration.pipe";

describe('DurationPipe', ()=>{

  it ('should transform duration of course', ()=>{
    const durationPipe = new DurationPipe();
    let result = durationPipe.transform('90');
    expect(result).toEqual('1h 30 min');
  });

  it ('should transform duration of course and shows minutes without hours if duration up to 60 min', ()=>{
    const durationPipe = new DurationPipe();
    let result = durationPipe.transform('30');
    expect(result).toEqual('30 min');
  });
});
