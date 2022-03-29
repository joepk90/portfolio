import { generateBEMModifiersClassList, appendString } from '@utilities/utilities';
import '@components/common/Row/Row.scss';

type Props = {
    children: any
}

const Row = ({ children }: Props) => {
    return (
        <div className='row'>{children}</div>
    )
}


export default Row;