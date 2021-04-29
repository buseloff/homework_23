export default function (err, res, next) {
  res.status(404).send("Not Found");
  //res.status(500).send(err);
}
