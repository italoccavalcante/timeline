import './style.css'
import moment from 'moment'
export const Timeline = (props) => {
    const {items} = props

    if(items.length === 0) {
        return (
            <h1>No data Founded</h1>
        )
    }


    return (
        <div  className='container'> 
            {items.map((items) => {
                const startDate = moment(items.start).format("MMM YYYY")
                const cardColor = items.color ? items.color : 'default'
                return (
                    <div key={items.id} className={`itemCard ${cardColor}`}>
                        <h1>{startDate}</h1>
                        <span>{items.name}</span>
                    </div>
    
            
            
            )
            })}
        </div>
    )
    
}