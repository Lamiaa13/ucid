const validUCIDs = ['johnsmith', 'sam123', 'mark1', 'jimmy'];
const ucidForm = document.getElementById('ucidForm');

ucidForm.onsubmit = (e) => {
    e.preventDefault();
    const ucid = document.getElementById('ucid').value;

    const ucidPattern = /^[a-zA-Z]+[0-9]{0,3}$/;

    if (!ucidPattern.test(ucid)) {
        alert('UCID DOES NOT CONFORM TO VALID FORMAT');
        return;
    }

    if (validUCIDs.includes(ucid)) {
        alert('VALID UCID FORMAT AND UCID FOUND');
    } else {
        alert('VALID UCID FORMAT BUT INVALID UCID');
    }
};