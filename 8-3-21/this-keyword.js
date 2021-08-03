// ('.btn-guide').click(function(event) {
//     event.preventDefault();
//     console.log($(this));
// }); // Finds 17 buttons from rail.devamp.com/tracks - JQuery

var guide = {
    title: 'Guide to programming',
    content: 'Content goes here',
    visibleToUser: function (viewingUserRole) {
        if (viewinguserRole === 'paid') {
            return true;
        } else {
            return false;
        }
    },
    renderContent: function(userRole) { // Authorizes based on a persons role
        if (this.visibleToUser(userRole)) {
            console.log(this.title + ' - ' + this.content);
        } else {
            this.content = '';
            console.log(this.title + ' - ' + this.content);
        }
    }
}

user = { role: 'paid' };
guide.renderContent(user.role);