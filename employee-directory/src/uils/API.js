import React from 'react';
APIkey = 'EO7P-F2AH-FZ4W-UYWU';

$.ajax({
    url: 'https://randomuser.me/api/?inc=gender,name,email,cell,picture,dob&results=20',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
        