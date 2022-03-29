import { useState } from 'react';
import { generateBEMModifiersClassList, appendString } from '@utilities/utilities';
import '@components/common/Column/Column.scss';

export const columnSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export type ColumnSizes = typeof columnSizes[number];

type Props = {
    children: any
    xs?: ColumnSizes
    sm?: ColumnSizes
    md?: ColumnSizes
    lg?: ColumnSizes
    xl?: ColumnSizes
}

const Column = ({ children, xs = 12 }: Props) => {

    const [currentSize, setCurrentSize] = useState(xs)

    useEffect(() => { }, [])

    const calculateWidth: string = () => {

        const size = 100 / currentSize

    }

    return (
        <div className='column' style={{ width: '10px' }}>{children}</div>
    )
}


export default Column;