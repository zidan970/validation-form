function validateForm() 
{
    if (document.forms["formPersetujuan"]["nama"].value == "") 
    {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPersetujuan"]["nama"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["nrp"].value == "") 
    {
        alert("NRP Tidak Boleh Kosong");
        document.forms["formPersetujuan"]["nrp"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["email"].value == "") 
    {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPersetujuan"]["email"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["asal"].value == "") 
    {
        alert("Asal Tidak Boleh Kosong");
        document.forms["formPersetujuan"]["asal"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["Status vaksin"].selectedIndex < 1) 
    {
        alert("Pilih Status Vaksin");
        document.forms["formPersetujuan"]["Status Vaksin"].focus();
        return false;
    }
    if (document.forms["formPersetujuan"]["Apakah Anda setuju untuk kuliah offline?"].selectedIndex < 1) 
    {
        alert("Pilih Persetujuan");
        document.forms["formPersetujuan"]["Apakah Anda setuju untuk kuliah offline?"].focus();
        return false;
    }
}