import { useEffect } from 'react';

const BASE_TITLE = 'Alberto Bort';

export const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title} — ${BASE_TITLE}` : `${BASE_TITLE} | Technical Project Manager & IT Business Analyst`;
    }, [title]);
};
