# import argument parsing library stuff
import argparse
# import neocities library: https://github.com/neocities/python-neocities
import neocities
# import subprocess for running jekyll
import subprocess

parser = argparse.ArgumentParser(description='Upload a project file to neocities.')
parser.add_argument("postname", help="The file name of the post to push. This should be a path to an html file in _site. Ex: /10/22/mypostfile.html")
args = parser.parse_args()
print("POST-NAME:"+args.postname)
# exit()

# get the password from the password file
passfile = open("PASSWORD.txt")
pass_string = passfile.readlines()
passfile.close()
pass_string[0] = ''.join(pass_string[0].split())  # strip all whitespace

# get the username from the password file
userfile = open("USERNAME.txt")
user_string = userfile.readlines()
userfile.close()
user_string[0] = ''.join(user_string[0].split())  # strip all whitespace

# nc = neocities.NeoCities('username', 'password')
# log on to the website
nc = neocities.NeoCities(user_string[0], pass_string[0])
response = nc.info(user_string[0])
print("SITE-RESPONSE:\n")
print(response)

# rebuild with jekyll just to be safe
print("REBUILDING JEKYLL SITE:\n")
subprocess.call(["jekyll", "build"])
nc.upload(('_site/'+args.postname, args.postname),
          ('_site/index.html', 'index.html'))
