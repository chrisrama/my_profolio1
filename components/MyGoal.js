import react from "react";
import reactDOM from "react-dom";


class Table extends React.Component {

     render(){

     return (
    <div>
     <table>

         <thead>
         <tr>
             <th> </th>
             <th> React</th>
             <th> C++ </th>
             <th>jAvscript</th>
             <th>Web development</th>
             <th> Precalculs</th>
             <th>Physics</th>
             <th>Maths</th>
         </tr>
         </thead>
             <tbody>
                <tr>
                 <td>Days</td> 
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                </tr>


           <tr>
                 <td>Hours</td>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
                 <th></th>
           </tr>


           <tr>
           <td>streaks</td>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>

           </tr>
         </tbody>
       
   </table>
   </div>
     );
     } 
}
reactDOM.render(<Table />,getElementById("root"));
