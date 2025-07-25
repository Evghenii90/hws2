import React from 'react'
import up from './icons/up.svg'
import down from './icons/down.svg'
import none from './icons/none.svg'


// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //return up // исправить
    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{cursor: 'pointer', display: 'inline-flex', alignItems: 'center'}}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{
                    width: '16px',
                    height: '16px',
                    marginLeft: '5px',
                    verticalAlign: 'middle'
                }}
                alt="sort"
            />
        </span>
    )
}

export default SuperSort
