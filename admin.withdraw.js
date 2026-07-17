// Admin Withdraw Manager

const withdrawList = document.getElementById("withdrawList");

// Load Withdraw Requests
database.ref("withdraw_requests").on("value", (snapshot) => {

    withdrawList.innerHTML = "";

    if (!snapshot.exists()) {
        withdrawList.innerHTML = "<h3>No Withdraw Requests</h3>";
        return;
    }

    snapshot.forEach((child) => {

        const data = child.val();
        const key = child.key;

        withdrawList.innerHTML += `
        <div class="withdraw-card">
            <h3>${data.username}</h3>
            <p>Amount: ${data.amount}</p>
            <p>Status: ${data.status}</p>

            <div class="withdraw-actions">
                <button class="approve" onclick="approveWithdraw('${key}')">
                    Approve
                </button>

                <button class="reject" onclick="rejectWithdraw('${key}')">
                    Reject
                </button>
            </div>
        </div>
        `;

    });

});

// Approve Withdraw
function approveWithdraw(id) {

    database.ref("withdraw_requests/" + id).update({
        status: "Approved"
    });

    alert("Withdraw Approved");

}

// Reject Withdraw
function rejectWithdraw(id) {

    database.ref("withdraw_requests/" + id).update({
        status: "Rejected"
    });

    alert("Withdraw Rejected");

}
