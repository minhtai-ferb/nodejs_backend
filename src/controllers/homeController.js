const { render } = require("ejs");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHome = async (req, res) => {
  let results = await getAllUsers();
  res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  //callback:
  // connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  res.send("Created user succeed");

  // const [results, fields] = await connection.query();
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHome,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
