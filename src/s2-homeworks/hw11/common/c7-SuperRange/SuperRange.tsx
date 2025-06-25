import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: '#0c2',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                },
                '& .MuiSlider-track': {
                    height: 4,
                },
                '& .MuiSlider-rail': {
                    height: 4,
                    color: '#8b8b8b;',
                    opacity: 1,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
