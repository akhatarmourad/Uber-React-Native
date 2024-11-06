export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthsNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day < 10 ? "0" + day : day } ${month} ${year}`;
}

export const formatTime = (timeMinutes: number): string => {
    const formattedMinutes = +timeMinutes?.toFixed(0) || 0;

    if(formattedMinutes < 60) {
        return `${formattedMinutes} min`;
    }
    else {
        const hours = Math.floor(formattedMinutes / 60);
        const remainingMinutes = formattedMinutes % 60;
        
        return `${hours}h ${remainingMinutes}m`;
    }
}