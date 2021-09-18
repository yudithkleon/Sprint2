import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import querystring from 'query-string'
import { AppHook } from '../Hooks/AppHook';
import MostrarPeli from './MostrarPeli';

const url = "https://appiyudith.herokuapp.com/peliculas"

const Buscador = ({history}) => {
   
//     const location = useLocation();
//     const {q = ''} = querystring.parse(location.search);
//     console.log(q);

//   const [formValues, handleInputChange] = AppHook({
//       searchText: q
//   })

//   const {searchText} = formValues;

//   const moviesFiltered = useMemo(() => getMoviesByName(q), [q]);

//   const handleSearch = (e) =>{
//       e.preventDefault();
//       history.push(`?q=${searchText}`)
//   }

//   const getMoviesByName = ( title = '' ) => {

//     if ( title === '' ) {
//         return [];
//     }

//    title =title.toLocaleLowerCase();
//     return movies.filter( movie => movie.title.toLocaleLowerCase().includes(title )  );

// }

//     return (
//         <div>
//              <h1>Search Screen</h1>
//             <hr />
//             <div className="row">
//                 <div className="col-5">
//                     <h4> Search Form </h4>
//                     <hr />
//                     <form onSubmit={handleSearch}>
//                         <input 
//                             type="text"
//                             placeholder="Find your hero"
//                             className="form-control"
//                             name="searchText"
//                             autoComplete="off"
//                             name="searchText"
//                             value={searchText}
//                             onChange={handleInputChange}
//                         />
//                         <button
//                             type="submit"
//                             className="btn m-1 btn-block btn-outline-primary"
//                         >
//                             Search...
//                         </button>
//                     </form>
//                 </div>
//                 <div className="col-7">
//                     <h4> Results </h4>
//                     <hr />
//                     {
//                         (q==='')
//                         && <div className="alert alert-info">Search a movie</div>
//                     }
//                     {
//                         (q !== '' && moviesFiltered.length===0)
//                         && <div className="alert alert-danger">
//                              There is no a movie with {q}
//                         </div>
//                     }
//                     {
//                         moviesFiltered.map(movie => (
//                             <MostrarPeli key={movie.id} 
//                             {...movie}/>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     )

}

export default Buscador


