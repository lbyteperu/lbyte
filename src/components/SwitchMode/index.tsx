import React, { useState, useEffect } from 'react'
import { Switch, FormGroup, FormControlLabel } from "@mui/material"

export default function SwitchMode() {
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(() => {
        const useDarkTheme = parseInt(localStorage.getItem('dark-mode'))
        if (isNaN(useDarkTheme)) {
            setDarkTheme(true)
        } else if (useDarkTheme == 1) {
            setDarkTheme(true)
        } else if (useDarkTheme == 0) {
            setDarkTheme(false)
        }
    }, [])

    useEffect(() => {
        if (darkTheme) {
            localStorage.setItem('dark-theme', '1')
            document.body.classList.add('dark-mode')
        } else {
            localStorage.setItem('dark-theme', '0')
            document.body.classList.remove('dark-mode')
        }
    }, [darkTheme])

    function toggleTheme() {
        setDarkTheme(!darkTheme)
    }

    return (
        <FormGroup>
            <FormControlLabel
                control={<Switch color="secondary" onClick={toggleTheme} />}
                label='Modo Día' />
        </FormGroup>
    )
}