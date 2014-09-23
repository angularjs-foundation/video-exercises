npm install

NG_TUBE_REPO="https://github.com/angularjs-foundation/video-app.git"

MODULES="M1 M1-solutions M2 M2-solutions M3 M3-solutions M4 M4-solutions M5 M5-solutions M6 M6-solutions M7 M7-solutions"
        

APP_DIR="./application"
MODULES_DIR="./hands-on-exercises"

if [ -d $MODULES_DIR ]; then
  echo "The directory \"$MODULES_DIR\" already exists, please remove first before running the installer."
  exit
fi

if [ ! -d $APP_DIR ]; then
  echo "Cloning ng-tube to $APP_DIR";
  git clone -q $NG_TUBE_REPO $APP_DIR
fi

mkdir $MODULES_DIR
for MODULE in $MODULES; do
  CURRENT_MODULE_DIR=$MODULES_DIR/$MODULE
  cd $APP_DIR
  git checkout -q $MODULE
  cp -R . ../$CURRENT_MODULE_DIR
  echo "Downloaded $MODULE into $CURRENT_MODULE_DIR" 

  cd ..
done

CURRENT_MODULE_DIR=$MODULES_DIR/M1
cp $CURRENT_MODULE_DIR/package.json $MODULES_DIR/package.json
cd $MODULES_DIR
npm i
cd - 

for MODULE in $MODULES; do
  CURRENT_MODULE_DIR=$MODULES_DIR/$MODULE
  cd $CURRENT_MODULE_DIR
  ln -s ../node_modules
  echo "Linked node_modules within $CURRENT_MODULE_DIR/node_modules"
  cd -
done
