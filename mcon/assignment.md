### assignment 1
create a item table with the following fields:
- id
- name
- quantity
- rate

1. create a item schema and convert to model
2. in app.js write CRUD operations for item

### update and delete operations
const updated = await Emp.findOneAndUpdate(
  { _id: empId },
  { $set: { name: 'new name' } },
  { new: true }
);

const deleted = await Emp.findOneAndDelete({ _id: empId });
