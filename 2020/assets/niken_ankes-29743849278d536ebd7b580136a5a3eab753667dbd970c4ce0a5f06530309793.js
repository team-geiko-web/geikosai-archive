function update_preview(e,t=0){if(1==current_door_element)document.getElementById(previous_frame_id+"_pv").style.display="none",previous_frame_id=e,document.getElementById(e+"_pv").style.display="block";else if(2==current_door_element)document.getElementById(previous_handle_id+"_pv").style.display="none",previous_handle_id=e,document.getElementById(e+"_pv").style.display="block";else if(3==current_door_element)document.getElementById(previous_window_id+"_pv").style.display="none",previous_window_id=e,document.getElementById(e+"_pv").style.display="block";else if(4==current_door_element)document.getElementById(previous_tex_id+"_pv").style.display="none",previous_tex_id=e,document.getElementById(e+"_pv").style.display="block";else if(5==current_door_element){previous_col1_id=t;for(var n=document.getElementsByClassName("cls-5"),o=0;o<n.length;o++)n[o].setAttribute("style","fill:"+e);document.getElementById("previews").innerHTML+=""}else if(6==current_door_element){previous_col2_id=t;for(n=document.getElementsByClassName("cls-6"),o=0;o<n.length;o++)n[o].setAttribute("style","fill:"+e);document.getElementById("previews").innerHTML+=""}}function next(){if("DoorHandle1"==previous_handle_id&&1==current_door_element)document.getElementById("DoorHandle1_pv").style.display="block";else if("DoorWindow1"==previous_window_id&&2==current_door_element)document.getElementById("DoorWindow1_pv").style.display="block";else if("DoorTex1"==previous_tex_id&&3==current_door_element)document.getElementById("DoorTex1_pv").style.display="block";else if(1==previous_col1_id&&4==current_door_element)for(var e=document.getElementsByClassName("cls-5"),t=0;t<e.length;t++)e[t].setAttribute("style","fill:#df5353"),document.getElementById("previews").innerHTML+="";else if(1==previous_col2_id&&5==current_door_element)for(e=document.getElementsByClassName("cls-6"),t=0;t<e.length;t++)e[t].setAttribute("style","fill:#df5353"),document.getElementById("previews").innerHTML+="";document.getElementById("choices"+current_door_element).style.display="none",document.getElementById("discriptionStep"+current_door_element).style.display="none",current_door_element++,document.getElementById("choices"+current_door_element).style.display="flex",document.getElementById("discriptionStep"+current_door_element).style.display="inline",1!=current_door_element&&(document.getElementById("button_previous").style.display="inline-block"),6==current_door_element&&(document.getElementById("button_finish").style.display="inline-block",document.getElementById("button_next").style.display="none")}function previous(){document.getElementById("choices"+current_door_element).style.display="none",document.getElementById("discriptionStep"+current_door_element).style.display="none",current_door_element--,document.getElementById("choices"+current_door_element).style.display="flex",document.getElementById("discriptionStep"+current_door_element).style.display="inline",1==current_door_element&&(document.getElementById("button_previous").style.display="none"),6!=current_door_element&&(document.getElementById("button_next").style.display="inline-block",document.getElementById("button_finish").style.display="none")}function finish(){window.location.href="http://www.design.kyushu-u.ac.jp/~festival/2020/2ken/doors_live.html";}let previous_frame_id="DoorFrame1",previous_handle_id="DoorHandle1",previous_window_id="DoorWindow1",previous_tex_id="DoorTex1",previous_col1_id=1,previous_col2_id=1,door_nums="",current_door_element=1;