import React from 'react';
import './style.css'

const Features = (props) => {
    const { benefitId, benefitIncluded, benefitName, benefitValue } = props.data;
    return (
        <table>
            <tr>
                <th>BenefitId</th>
                <th>BenefitIncluded</th>
                <th>BenefitName</th>
                <th>BenefitValue</th>
            </tr>
            <tbody>
                {props.data.map((data, index) => {
                    return <tr key={index}> <td>{data.benefitId}</td>
                        <td>{data.benefitIncluded ? 'YES' : 'NO'}</td>
                        <td>{data.benefitName}</td>
                        <td>{data.benefitValue}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )

}

export default Features;