/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch )
 */

function runner(){
   try{
      console.log('Hello');

      throw new Error('문제가 생겼습니다.');

      console.log('Code Factory');
   }catch(e){
      console.log('---catch--');
      console.log(e);
   } finally { // 'finally'는 써도되고 안 써도 된다.
      //try에러가 나든 안나든 무조건 finally로 넘어 온다.
      console.log('---finally--');
   }
}

runner();