const nums = [ 1, 6, 1, 6, 2, 3, 1, 1, 4, 1, 8, 5, 5, 5, 5, 5, 5, 9, 9, 9, 1, 1 ];
const oddReplicas = ( arr ) => {
    let replicasObj = {};
    let maxReplicasNum;
    arr.forEach( num => {
        if ( num & 2 !== 0 ) {
            replicasObj[ num ] = ( replicasObj[ num ] || 0 ) + 1;
            maxReplicasNum || ( maxReplicasNum = num );
            if ( replicasObj[ num ] > replicasObj[ maxReplicasNum ] ) maxReplicasNum = num;
        }

    } );
    return [ maxReplicasNum, replicasObj[ maxReplicasNum ] ];
};
const res = oddReplicas( nums );
console.log( `key with max replicas in the array: ${ res[ 0 ] }, replicas: ${ res[ 1 ] }` );