var app = new function () {

    this.el = document.getElementById('list');

    this.list = ['Bayar Kontrakan', 'Beli Steam Wallet'];

    this.Count = function (data) {
        var el = document.getElementById('counter');
        var name = 'list';

        //data > 1 ? name = '' : 'No' + name;

        if (data) {
            if (data > 1) {
                name = '';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.tenary = function (data) {
        let n = data;
        let m = n <= 2 ? "Kegiatan mu sedikit" : "Kegiatanmu banyak";
        document.getElementById('tenary').textContent = (m);
    };

    this.FetchAll = function () {
        var data = '';

        if (this.list.length > 0) {
            for (i = 0; i < this.list.length; i++) {
                data += '<tr>';
                data += '<td> <input class="form-check-input me-3" type="checkbox" value="" id="flexChe' +
                        'ckDefault">' + this.list[i] + '</td>';
                data += '<td><button class="btn btn-primary" onclick="app.Edit(' + i + ')">Ganti</butto' +
                        'n></td>';
                data += '<td><button class="btn btn-danger" onclick="app.Delete(' + i + ')">Buang</butt' +
                        'on></td>';
                data += '</tr>';
            }
        }

        this.Count(this.list.length);
        this.tenary(this.list.length);
        return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('add-list');
        // Get the value
        var list = el.value;

        if (list) {
            // Add the new value
            this
                .list
                .push(list.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        var el = document.getElementById('edit-list');
        // Display value in the field
        el.value = this.list[item];
        // Display fields
        document
            .getElementById('spoiler')
            .style
            .display = 'block';
        self = this;

        document
            .getElementById('saveEdit')
            .onsubmit = function () {
                // Get value
                var list = el.value;

                if (list) {
                    // Edit value
                    self
                        .list
                        .splice(item, 1, list.trim());
                    // Display the new list
                    self.FetchAll();
                    // Hide fields
                    CloseInput();
                }
            }
    };

    this.Delete = function (item) {
        // Delete the current row
        this
            .list
            .splice(item, 1);
        // Display the new list
        this.FetchAll();
    };
}

app.FetchAll();

function CloseInput() {
    document
        .getElementById('spoiler')
        .style
        .display = 'none';
}