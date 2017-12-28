const f = {}
export default event = {
    $emitOnce(envetName){
        const arr = f[envetName] || [];

        while(arr.length> 0){
            arr.pop().apply(null);
        }
    },
    $once(envetName, fn){
        f[envetName] = f[envetName]||[];
        f[envetName].push(fn);
    }
}