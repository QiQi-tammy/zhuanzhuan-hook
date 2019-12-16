import React from 'react'
import Star from './Star';

const Item = (props: { index: number, list: any[] }) => {

    return (
        <div>
            {
                props.list.filter(item => item.status === props.index).map(item => (
                    <dl key={item.id}>
                        <dt>
                            <img src={item.img} alt="" />
                        </dt>
                        <dd>
                            <h4>{item.title}</h4>
                            <div> <Star range={item.range} /><span>执行人 {item.person}</span></div>
                            <p>
                                <span>开始时间 {item.start_time}</span>
                                <span>结束时间 {item.end_time}</span>
                            </p>
                        </dd>
                    </dl>
                ))
            }
        </div>
    )
}
export default Item