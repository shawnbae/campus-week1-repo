let height = 30

for(let i=1; i<=height/3; i++){
    let line = '';
    for(let j=0; j<height-i; j++){
        line += ' ';
      }

    for(let j=0; j<i*2-1; j++){
      line += '.';
    }
    console.log(line);



  }

  
  for(let i=height; i>height/3*2; i--){
    let line = '';
    for(let j=0; j<height-i; j++){
        line += ' ';
      }

    for(let j=0; j<i*2-1; j++){
      line += '.';
    }
    console.log(line);
  }


for(let i=height/3; i>=0; i--){
    let line = '';
    for(let j=0; j<i; j++){
        line += ' ';
      }
    for(let j=0; j<i*2 +1; j++){
        line += '.';
      }

    for(let j=0; j<(height/3-i)*6 +1 ; j++){
        line += ' ';
      }
      for(let j=0; j<i*2 +1; j++){
        line += '.';
      }



    console.log(line);
  }



/*
result
*/

//                              .
//                             ...
//                            .....
//                           .......
//                          .........
//                         ...........
//                        .............
//                       ...............
//                      .................
//                     ...................
// ...........................................................
//  .........................................................
//   .......................................................
//    .....................................................
//     ...................................................
//      .................................................
//       ...............................................
//        .............................................
//         ...........................................
//          .........................................
//           ..................... .....................
//          ...................       ...................
//         .................             .................
//        ...............                   ...............
//       .............                         .............
//      ...........                               ...........
//     .........                                     .........
//    .......                                           .......
//   .....                                                 .....
//  ...                                                       ...
// .                                                             .