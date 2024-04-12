# light-able-bootstrap-vanilla-js
Bootstrap version of light-able

# Prerequisites
# Before you begin, make sure you have the following installed on your machine:
Node.js
Python (3.6 or higher)
Django (4.2 or higher)

# Build Assets
Before running the application we need to build theme assets:
Start a command prompt window or terminal and change directory to light_able-django/

# Install packages using one of following commands
yarn install
OR
npm install
This command will fetch all dependencies listed in /package.json and place them into/node_modules folder.

# You can use Gulp  command to bundle theme assets. The below command will compile all the assets(sass, js, media) to /public/assets folder:
gulp

# Install Python
Download the executable installer and run it.

# After installation, open the command prompt and check that the Python version matches the version you installed by executing:
python --version
Check Pip Version
py -m pip --version
upgrade pip
py -m pip install --upgrade pip

# Virtualenv
# Make sure to have the virtualenv installed globally & running on your computer. If you already have installed on your computer, you can skip this step.
# Virtualenv installation command for Linux & mac os
python3 -m pip install --user virtualenv

Virtualenv installation command for Windows
py -m pip install --user virtualenv

# Activate Virtual Environment on Windows OS
environment-name/Scripts/activate

# Install Django on linux & mac OS
python -m pip install Django

# Install Django on Windows OS
py -m pip install Django

# Note: Depending on your installation, you may need to use either pip3 or pip and for python you may need to use either python3 or python.

# Run Project
# You have x unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions. Run 'python manage.py migrate' to apply them.
python manage.py migrate

# Setting up Static Files
# Go to light_able_django/settings.py and add following command:-
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR,'public/assets')]
STATIC_ROOT = os.path.join(BASE_DIR,'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Run below command for run your project
python manage.py runserver
