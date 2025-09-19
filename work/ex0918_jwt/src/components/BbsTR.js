import Link from "next/link";

export default function BbsTR(props){

    return(
    <tr key={1}>
        <td>
            <Link href={`bbs/${props.item.b_idx}`}>{props.index+1}</Link></td>
        <td>{props.item.title}</td>
        <td>{props.item.writer}</td>
        <td>{props.item.write_date}</td>
        <td>{props.item.hit}</td>
    </tr>
    )
};