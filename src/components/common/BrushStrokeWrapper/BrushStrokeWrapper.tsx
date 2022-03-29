import BrushStroke from '@components/common/BrushStroke/BrushStroke';
import '@components/common/BrushStrokeWrapper/BrushStrokeWrapper.scss';

export type BrushStrokeWrapperProps = {
    children: any;
}

const BrushStrokeWrapper = ({ children }: BrushStrokeWrapperProps) => {

    return (
        <div className='brush-stroke-wrapper'>
            <BrushStroke className='brush-stroke-wrapper__top' />
            {children}
            <BrushStroke className='brush-stroke-wrapper__bottom' />
        </div>
    )
}

export default BrushStrokeWrapper;