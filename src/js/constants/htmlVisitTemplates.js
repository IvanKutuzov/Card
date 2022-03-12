export const htmlTemplateCardiologist = `
    <label>
       Visit purpose
       <br>
       <input id="title" type="text" name="title" placeholder="Enter visit's purpose" required>
    </label>
    <label>
       Brief description of the visit
       <br>
       <textarea id="description" name="description" placeholder="Enter visit's brief description"></textarea>
    </label>
    <label>
       Select priority
       <select id="urgency" name="urgency">
       <option value="normal">Normal</option>
       <option value="high">High</option>
       <option value="low">Low</option>
    </select>
    </label>
    <label>
       Full name
       <br>
       <input id="patientName" type="text" name="patientName" placeholder="Enter patient's full name" required>
    </label>
    <label>
       Normal blood pressure
       <br>
       <input id="bloodPressure" name="bloodPressure" type="text" pattern="[0-9]+\/[0-9]" placeholder="Enter patient's normal blood pressure, e.g.120/80" required>
    </label>
    <label>
       Body mass index
       <br>
       <input id="bodyMassIndex" name="bodyMassIndex" type="number" placeholder="Enter patient's body mass index" required>
    </label>
    <label>
       Cardiovascular disease history
       <br>
       <textarea id="cardiovascularDiseaseHistory" name="cardiovascularDiseaseHistory" placeholder="Enter patient's cardiovascular disease history"></textarea>
    </label>
    <label>
       Age
       <br>
       <input id="age" type="number" name="age" placeholder="Enter patient's age" required>
    </label>
`;

export const htmlTemplateDentist = `
    <label>
       Visit purpose
       <br>
       <input type="text" id="title" name="title" placeholder="Enter visit's purpose" required>
    </label>
    <label>
       Brief description of the visit
       <br>
       <textarea id="description" name="description" placeholder="Enter visit's brief description"></textarea>
    </label>
    <label>
    Select priority
    <select id="urgency" name="urgency">
    <option value="normal">Normal</option>
    <option value="high">High</option>
    <option value="low">Low</option>
 </select>
    </label>
    <label>
       Full name
       <br>
       <input type="text" id="patientName" name="patientName" placeholder="Enter patient's full name" required>
    </label>
    <label>
       Date of last visit
       <br>
       <input type="date" id="dateOfLastVisit" name="dateOfLastVisit" placeholder="Enter the last visit date" required>
    </label>
`;

export const htmlTemplateTherapist = `
    <label>
       Visit purpose
       <br>
       <input type="text" id="title" name="title" placeholder="Enter visit's purpose" required>
    </label>
    <label>
       Brief description of the visit
       <br>
       <textarea id="description" name="description" placeholder="Enter visit's brief description"></textarea>
    </label>
    <label>
    Select priority
    <select id="urgency" name="urgency">
       <option value="normal">Normal</option>
       <option value="high">High</option>
       <option value="low">Low</option>
    </select>
    </label>
    <label>
       Full name
       <br>
       <input type="text" id="patientName" name="patientName" placeholder="Enter patient's full name" required>
    </label>
    <label>
       Age
       <br>
       <input type="number" id="age" name="age" placeholder="Enter patient's age" required>
    </label>
`;
