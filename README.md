# 𝗛𝗲𝗹𝗹𝗼! 𝗜'𝗺 Byron

𝑰 ❤️ Back𝒆𝒏𝒅 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕!

:writing_hand: It is a technical test for Backend where an API connected to Hubspot is created using its own methods and can be tested with a basic light frontend layer.

## 𝗠𝘆 𝗧𝗲𝗰𝗸 𝗦𝘁𝗮𝗰𝗸

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
        <span>𝗛𝗧𝗠𝗟𝟱</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/html-5.svg">
      </td>
      <td width="25%" align="center">
        <span>𝗚𝗶𝘁</span><br><br><br>
        <img height="64px" src="https://cdn.svgporn.com/logos/git-icon.svg">
      </td>
      <td width="25%" align="center">
        <span>𝗩𝗦 𝗖𝗼𝗱𝗲</span><br><br><br>
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
- Run the file ``` index.html ``` found in the frontend folder with the browser
- A list with the users saved in the table ```developer_test_5``` will be displayed
- You will find a form with three fields to enter the necessary data to create a user
- Pressing the SAVE button will register the new user
- Pressing on each of the ``` ELIMINAR ``` buttons will delete the registered user
- Pressing on each of the ``` ACTUALIZAR ``` buttons will switch focus to the form and allow update the registered user data

🖐️: There was a bug when updating the user, identified with the patch method cors, so it was changed by PUT but it generates a duplicate of the updated user
- Data validations were not created
- There are problems in the frontend to refresh the page

🖐️: Endpoints can be tested locally with ``` Insomnia ``` or ``` Postman ```
- List User  GET ``` http://localhost:8080/user ```
- Create User POST ``` http://localhost:8080/user ```
- Delete USer DELETE ``` http://localhost:8080/user ```
- Update User PATCH ``` http://localhost:8080/user ```

---
⭐️ From [ByronPiedrahita](https://github.com/ByronPiedrahita)
