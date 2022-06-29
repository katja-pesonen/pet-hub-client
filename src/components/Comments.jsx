// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { SessionContext } from '../contexts/SessionContext'
// import { BASE_API_URL } from '../utils/constants';

// function Comments() {

//     const { isAuthenticated } = useContext(SessionContext)

//     const [comments, setComments] = useState([])
//     console.log('Comments: ', comments);

//     useEffect(() => {                                
//         axios
//           .get(`${BASE_API_URL}/api/pets/:id`) 
//           .then((response) => {
//             console.log('response.data', response.data);
//             setComments(response.data)
//           });
        
//       }, [] );  

//   return (
// //     <div>Comments</div>
// //     <div>
  
// //         {comments.map((pet) => (
// //       <div key={pet._id}>
// //            {pet.comment}
// //            </div>
// //  ))}
// //     </div>

// )
// }


// export default Comments