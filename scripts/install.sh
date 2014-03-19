npm install

NG_TUBE_REPO="git@github.com:angularjs-foundation/video-app.git"

MODULES="M1 M2 M3 M4 M5 M6 M7"
        

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
