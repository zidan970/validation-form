function validateForm() 
{
    if (document.forms["formPersetujuan"]["nama"].value == "") 
    {
        alert("Nama tidak boleh kosong");
        document.forms["formPersetujuan"]["nama"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["nrp"].value == "") 
    {
        alert("NRP tidak boleh kosong");
        document.forms["formPersetujuan"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["email"].value == "") 
    {
        alert("Email tidak boleh kosong");
        document.forms["formPersetujuan"]["email"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["asal"].value == "") 
    {
        alert("Asal tidak boleh kosong");
        document.forms["formPersetujuan"]["asal"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["departemen"].value == "") 
    {
        alert("Pilih Departemen Anda");
        document.forms["formPersetujuan"]["departemen"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["Status Vaksin"].value == "") 
    {
        alert("Pilih status vaksin Anda");
        document.forms["formPersetujuan"]["Status Vaksin"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["Apakah Anda setuju untuk kuliah offline?"].value == "") 
    {
        alert("Pilih persetujuan Anda");
        document.forms["formPersetujuan"]["Apakah Anda setuju untuk kuliah offline?"].focus();
        return false;
    }
}