import { createContext, useState, useEffect } from "react";
import { lecturers } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '$';

    const [appointments, setAppointments] = useState(() => {
        const saved = localStorage.getItem('appointments');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            'appointments',
            JSON.stringify(appointments)
        );
    }, [appointments]);

    const deleteAppointment = (id) => {
        setAppointments(prev =>
            prev.filter(item => item.id !== id)
        );
    };

    const editAppointment = (id, newTime) => {

        if (!newTime) return;

        setAppointments(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, time: newTime }
                    : item
            )
        );

    };

    const value = {
        lecturers,
        currencySymbol,
        appointments,
        setAppointments,
        deleteAppointment,
        editAppointment
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;