import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useState } from 'react';
import '../assets/scss/prayerbook.scss'
import { AddFriend } from '../components/AddFriend';
import { ClearDatabaseButton } from '../components/ClearDatabaseButton';
import { FriendList } from '../components/FriendList';
import { db } from '../db';


function PrayerBookPage() {
    const friends = useLiveQuery(
        () => db.friends.toArray()
    );

    if(friends == undefined) return null;
    console.log("frinends: ", friends)

    const removeItem = (id)=> {
        console.log("Id : ", id)
        db.friends.delete(id);
    }

    return ( 
        <div className='container'>
            
            <div className="text-center p-5 pt-1 home-div row ">
                
                <div className="col-sm-8 offset-sm-2 pt-5">
                    <div className='row'>
                        {
                            friends?.map( (card,index) => <CardItem key={index} head={card.name} body={card.age} id={card.id} removeItem={removeItem}/>)
                        }
                    </div>
                    <ClearDatabaseButton/>
                </div>
            </div>
        </div>
     );
}

function CardItem( {head, body, id, removeItem} ) {
    const [flag, setFlag] = useState(false);

    const toggleShowState = () => {
        setFlag(!flag);
    }
    return ( 
        <div className='col-lg-12 pb-5 col-sm-12' >
            <div className='row home-card-1 p-3'>
                <div className="col-xl-12 col-lg-12 col-sm-12">
                    <div className="card-head">
                        <h5 >{ head }</h5>
                    </div>
                    <div className="card-body">
                        <p className={(flag==false)?'showless':"showmore"}>
                            { body }
                        </p>
                        <div className='functionbuttons'>
                            <a onClick={()=>removeItem(id )} className='btn btn-sm btn-danger' style={{width:30, borderRadius:40,float:'right'}}>
                                {"X"}
                            </a>
                            <a onClick={()=>toggleShowState( )} className='btn btn-sm btn-primary' style={{width:30, borderRadius:40,float:'right'}}>
                                {(flag==false)?"+":' - '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     );
}


export default PrayerBookPage;