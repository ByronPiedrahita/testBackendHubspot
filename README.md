# ðð²ð¹ð¹ð¼! ð'ðº Byron

ð° â¤ï¸ Backððð ð«ðððððððððð!

:writing_hand: It is a technical test for Backend where an API connected to Hubspot is created using its own methods and can be tested with a basic light frontend layer.

## ð ð ð§ð²ð°ð¸ ð¦ðð®ð°ð¸

<table>
  <tbody>
    <tr valign="top">
      <td width="25%" align="center">
        <span>Javascript</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/javascript.svg">
      </td>
      <td width="25%" align="center">
        <span>Node.js</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/nodejs.svg">
      </td>
      <td width="25%" align="center">
        <span>Express</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/express.svg">
      </td>
      <td width="25%" align="center">
        <span>Hupspot</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/hubspot.svg">
      </td>
    </tr>
    <tr valign="top">
      <td width="25%" align="center">
        <span>ðð§ð ðð±</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/html-5.svg">
      </td>
      <td width="25%" align="center">
        <span>ðð¶ð</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/git-icon.svg">
      </td>
      <td width="25%" align="center">
        <span>ð©ð¦ ðð¼ð±ð²</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/visual-studio-code.svg">
      </td>
    </tr>
  </tbody>
</table>

## Instructions

:computer: 
- Clone the GitHub repository
- Open a command terminal
- Enter the backend folder ``` cd backend ```
- Install the necessary libraries ``` npm install ```
- Run the command ``` yarn dev ```  or ``` npm run node src/server.js ```
- Run the file ``` index.html ``` found in the frontend folder with the browser or use the ``` Live Server ``` extension
- A list with the users saved in the table ```developer_test_5``` will be displayed
- You will find a form with three fields to enter the necessary data to create a user
- Pressing the SAVE button will register the new user
- Pressing on each of the ``` ELIMINAR ``` buttons will delete the registered user
- Pressing on each of the ``` ACTUALIZAR ``` buttons will switch focus to the form and allow update the registered user data

ðï¸: There was a bug when updating the user, identified with the patch method cors, so it was changed by PUT but it generates a duplicate of the updated user
- Data validations were not created
- There are problems in the frontend to refresh the page DO IT MANUALLY

ðï¸: Endpoints can be tested locally with ``` Insomnia ``` or ``` Postman ```
- List User  GET ``` http://localhost:8080/user ```
- Create User POST ``` http://localhost:8080/user ```
- Delete USer DELETE ``` http://localhost:8080/user ```
- Update User PATCH ``` http://localhost:8080/user ```

---
â­ï¸ From [ByronPiedrahita](https://github.com/ByronPiedrahita)
