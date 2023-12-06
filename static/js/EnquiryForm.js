function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
function chkURL(value) {
    var re = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org|.mil|.edu|.net|]+(\[\?%&=]*)?/
    var trimmed = $.trim(value);
    if (re.test(trimmed)) {
        return false;
    }
}
function fnnameqc() {
    var name = $("#txtName").val().trim();
    if (name.length === 0) {
        $("#spName").text("Enter Your Name");
    }
    else {
        $("#spName").text('');
    }
}
function fnemailqc() {
    var email = $("#txtEmail").val().trim();
    if (email.length === 0) {
        $("#spEmail").text("Enter Email Id");
    }
    else {
        var _femail = IsEmail(email);
        if (_femail === false) {
            $("#spEmail").text("Invalid Email id.");
        }
        else {
            $("#spEmail").text('');
        }
    }
}
function fnphoneqc() {
    var phone = $("#txtContactNo").val().trim();
    if (phone.length === 0) {
        $("#spContactno").text("Enter Contact No.");
    }
    else {
        if (phone.length < 7) {
            $("#spContactno").text("Invalid Contact No.");
        }
        else {
            $("#spContactno").text('');
        }
    }
}
function fncityqc() {
    var name = $("#txtCity").val().trim();
    if (name.length === 0) {
        $("#spCity").text("Enter Your City");
    }
    else {
        $("#spCity").text('');
    }
}

function savesubscribeqc() {
    var _url = window.location.origin.toString() + "/SendData.aspx/addqc";
    var error = '';
    var name = "NA";
    var city = 'NA';
    
    var email = $("#txtSubscribeEmail").val();
    var mob = "NA";
    var message = "Subscribe";
    var project = window.location.toString();

  
    if (email.length === 0) {
        error += '\n-Enter Email Id';
        $("#spEmail").text("Enter Email Id");
    }
    else if (IsEmail(email) === false) {
        error += "\n-Invalid Email Id.";
        $("#spEmail").text("Invalid Email Id");
    }
  
   
    if (error.length > 0) {
        alert(error);
    }
    else {
        $(".loaderr").removeClass('loader d-none');
        $(".loaderr").addClass('loader d-block');
        var obj = {};
        obj.name = name;
        obj.email = email;
        obj.mob = mob;
        obj.city = city;
        obj.message = message;
        obj.project = project;
        $.ajax({
            type: "POST",
            url: _url,
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.d.length > 0) {
                    msg = data.d;
                }
            },
            complete: function () {
                $(".loaderr").addClass('loader d-none');
                $(".loaderr").removeClass('loader d-block');
                $("#txtSubscribeEmail").val('');
             
                $("#hdnenquiry").val('1');
                window.location.href = window.location.origin.toString() + "/Thanks.aspx";
            }
        });
    }
    return true;
}


function saveprojqc() {
    var _url = window.location.origin.toString() + "/SendData.aspx/addqc";
    var error = '';
    var name = $("#txtName").val();
    var city = 'NA';
    if ($("#txtCity").length > 0)
    { city = $("#txtCity").val(); }
    var email = $("#txtEmail").val();
    var mob = $("#txtContactNo").val();
    var message = $("#txtMessage").val();
    var project= window.location.toString();
    
    if (name.length === 0) {
        error += "-Enter Your Name";
        $("#spName").text("Enter Your Name");
    }
    if (email.length === 0) {
        error += '\n-Enter Email Id';
        $("#spEmail").text("Enter Email Id");
    }
    else if (IsEmail(email) === false) {
        error += "\n-Invalid Email Id.";
        $("#spEmail").text("Invalid Email Id");
    }
    if (mob.length === 0) {
        error += '\n-Phone No is required.';
        $("#spContactno").text("Phone No is required");
    }
    else if (mob.length < 6) {
        error += "\nInvalid Phone No";
        $("#spContactno").text("Invalid Phone No");
    }
    if (city.length === 0) {
        error += "\n-Enter Your City";
        $("#spCity").text("Enter Your City");
    }
    if (error.length > 0) {
        alert(error);
    }
    else {
    
        $(".enquiry .loaderr").removeClass('loader d-none');
        $(".enquiry .loaderr").addClass('loader d-block');
        var obj = {};
        obj.name = name;
        obj.email = email;
        obj.mob = mob;
        obj.city = city;
        obj.message = message;
        obj.project = project;
        $.ajax({
            type: "POST",
            url: _url,
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.d.length > 0) {
                    msg = data.d;
                }
            },
            complete: function () {
                $(".enquiry .loaderr").addClass('loader d-none');
                $(".enquiry .loaderr").removeClass('loader d-block');
                //$("#loaderproj").removeClass('loader d-block');
                //$("#loaderproj").addClass('loader d-none');
                //$("#SendProjId").removeClass('send d-none');
                //$("#SendProjId").addClass('send d-block');
                $("#txtName").val('');
                $("#txtEmail").val('');
                $("#txtContactNo").val('');
                if ($("#txtCity").length > 0) { $("#txtCity").val(''); }
                $("#txtMessage").val('');
                $("#hdnenquiry").val('1');
                window.location.href =window.location.origin.toString()+ "/Thanks.aspx";
            }
        });
    }
    return true;
}

function fnRequestHeading(Heading) {
    $("#RequestId").text(Heading);
    $("#hdnVisitType").val(Heading);
    if (Heading =="Download Brochure")
        $("#btnSubmit").html("Download Now");
    else
        $("#btnSubmit").html("Submit");
    
}
function fnnamemdlqc() {
    var name = $("#txtNamemdl").val().trim();
    if (name.length === 0) {
        $("#spNamemdl").text("Enter Your Name");
    }
    else {
        $("#spNamemdl").text('');
    }
}
function fncitymdlqc() {
    var name = $("#txtCitymdl").val().trim();
    if (name.length === 0) {
        $("#spCitymdl").text("Enter Your City");
    }
    else {
        $("#spCitymdl").text('');
    }
}
function fnemailmdlqc() {
    var email = $("#txtEmailmdl").val().trim();
    if (email.length === 0) {
        $("#spEmailmdl").text("Enter Email Id");
    }
    else {
        var _femail = IsEmail(email);
        if (_femail === false) {
            $("#spEmailmdl").text("Invalid Email id.");
        }
        else {
            $("#spEmailmdl").text('');
        }
    }
}
function fnphonemdlqc() {
    var phone = $("#txtContactNomdl").val().trim();
    if (phone.length === 0) {
        $("#spContactNomdl").text("Enter Contact No.");
    }
    else {
        if (phone.length < 7) {
            $("#spContactNomdl").text("Invalid Contact No.");
        }
        else {
            $("#spContactNomdl").text('');
        }
    }
}
function saveprojmdlqc() {
    var _url = window.location.origin.toString() + "/SendData.aspx/addqcwithDate";
    var error = '';
    var name = $("#txtNamemdl").val();
    var city = $("#txtCitymdl").val();
    var email = $("#txtEmailmdl").val();
   
    var mob = $("#txtContactNomdl").val();
    var VisitType = $("#hdnVisitType").val();
    var message = $("#txtMessagemdl").val();
    var project = window.location.toString();
    if (name.length === 0) {
        error += "-Enter Your Name";
        $("#spNamemdl").text("Enter Your Name");
    }
    if (email.length === 0) {
        error += '\n-Enter Email Id';
        $("#spEmailmdl").text("Enter Email Id");
    }
    else if (IsEmail(email) === false) {
        error += "\n-Invalid Email Id.";
        $("#spEmailmdl").text("Invalid Email Id");
    }
    if (city.length === 0) {
        error += "\n-Enter Your City";
        $("#spCitymdl").text("Enter Your City");
    }
    if (mob.length === 0) {
        error += '\n-Phone No is required.';
        $("#spContactNomdl").text("Phone No is required");
    }
    else if (mob.length < 6) {
        error += "\nInvalid Phone No";
        $("#spContactNomdl").text("Invalid Phone No");
    }
    
    if (error.length > 0) {
        alert(error);
    }
    else {
        $("#sitevisit .loaderr").removeClass('loader d-none');
        $("#sitevisit .loaderr").addClass('loader d-block');

        var obj = {};
        obj.name = name;
        obj.email = email;
        obj.mob = mob;
        obj.city = city;
        obj.message = message + " - " + VisitType;
        obj.project = project;
        //obj.PrefDate = PreferedDate;
        //obj.PrefTime = PreferedTime;
        $.ajax({
            type: "POST",
            url: _url,
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.d.length > 0) {
                    msg = data.d;
                  
                }
            },
            error: function (err) {
                alert('error');
            },
            complete: function () {
                $("#sitevisit .loaderr").addClass('loader d-none');
                $("#sitevisit .loaderr").removeClass('loader d-block');
                $("#txtNamemdl").val('');
                $("#txtEmailmdl").val('');
                $("#txtContactNomdl").val('');
                $("#txtCitymdl").val('');
                $("#txtMessagemdl").val('');
                $('#sitevisit').modal('hide');
                $("#hdnenquiry").val('1');
                window.location.href = window.location.origin.toString() + "/Thanks.aspx";
            }
        });
    }
    return true;
}

function fnnamebrqc() {
    var name = $("#txtNamebr").val().trim();
    if (name.length === 0) {
        $("#spNamebr").text("Enter Your Name");
    }
    else {
        $("#spNamebr").text('');
    }
}
function fnemailbrqc() {
    var email = $("#txtEmailbr").val().trim();
    if (email.length === 0) {
        $("#spEmailbr").text("Enter Email Id");
    }
    else {
        var _femail = IsEmail(email);
        if (_femail === false) {
            $("#spEmailbr").text("Invalid Email id.");
        }
        else {
            $("#spEmailbr").text('');
        }
    }
}
function fnphonebrqc() {
    var phone = $("#txtContactNobr").val().trim();
    if (phone.length === 0) {
        $("#spContactNobr").text("Enter Contact No.");
    }
    else {
        if (phone.length < 7) {
            $("#spContactNobr").text("Invalid Contact No.");
        }
        else {
            $("#spContactNobr").text('');
        }
    }
}
function saveprojbrqc() {
    var _url = window.location.origin.toString() + "/SendData.aspx/addqc";
    var error = '';
    var name = $("#txtNamebr").val();
    var city = "";
    var email = $("#txtEmailbr").val();
    var mob = $("#txtContactNobr").val();
    var message = $("#hdnMessageType").val();
    var project = window.location.toString();
    if (name.length === 0) {
        error += "-Enter Your Name";
        $("#spNamebr").text("Enter Your Name");
    }
    if (email.length === 0) {
        error += '\n-Enter Email Id';
        $("#spEmailbr").text("Enter Email Id");
    }
    else if (IsEmail(email) === false) {
        error += "\n-Invalid Email Id.";
        $("#spEmailbr").text("Invalid Email Id");
    }
    if (mob.length === 0) {
        error += '\n-Phone No is required.';
        $("#spContactNobr").text("Phone No is required");
    }
    else if (mob.length < 6) {
        error += "\nInvalid Phone No";
        $("#spContactNobr").text("Invalid Phone No");
    }
    if (error.length > 0) {
        alert(error);
    }
    else {
        $(".loaderr").removeClass('loader d-none');
        $(".loaderr").addClass('loader d-block');
        var obj = {};
        obj.name = name;
        obj.email = email;
        obj.mob = mob;
        obj.city = city;
        obj.message = message;
        obj.project = project;
        $.ajax({
            type: "POST",
            url: _url,
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.d.length > 0) {
                    msg = data.d;
                }
            },
            complete: function () {
                $(".loaderr").addClass('loader d-none');
                $(".loaderr").removeClass('loader d-block');
                $("#txtNamebr").val('');
                $("#txtEmailbr").val('');
                $("#txtContactNobr").val('');
                $('#enquiry').modal('hide');
                $('#MessageId').modal('show');
            }
        });
    }
    return true;
}

function fnMessageType(Heading) {
    $("#hdnMessageType").val(Heading);
}
