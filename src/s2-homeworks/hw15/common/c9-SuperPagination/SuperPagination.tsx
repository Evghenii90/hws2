import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // пишет студент
        onChange(page, +event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                    marginRight: '10px',
                    '& .MuiPaginationItem-root': {
                        color: '#1976d2',
                        fontSize: '14px',
                        minWidth: '32px',
                        height: '32px',
                        borderRadius: '4px',
                        border: '1px solid #e0e0e0',
                        margin: '0 3px'
                    },
                    '& .Mui-selected': {
                        backgroundColor: '#1976d2',
                        color: '#FFFFFF',
                    },
                    '& .MuiPaginationItem-ellipsis': {
                        border: 'none'
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
                style={{
                    width: '50px',       // Уменьшаем ширину
                    height: '30px',      // Уменьшаем высоту
                    fontSize: '14px',    // Уменьшаем размер текста
                    padding: '4px 8px',  // Уменьшаем внутренние отступы
                    margin: '0 5px'      // Добавляем небольшие отступы по бокам
                }}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
