import React, { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const throwHandler = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div onClick={throwHandler}>
            throw
        </div>
    );
};
