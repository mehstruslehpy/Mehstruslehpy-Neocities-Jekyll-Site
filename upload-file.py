# import argument parsing library stuff
import argparse
# import neocities library: https://github.com/neocities/python-neocities
import neocities

parser = argparse.ArgumentParser(description='Upload a file to neocities.')
parser.add_argument("filesource", help="The source file to push.")
parser.add_argument("filedest", help="The destination to push to.")
args = parser.parse_args()
print("FILESOURCE:"+args.filesource)
print("FILEDEST:"+args.filedest)

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

# upload the files
nc.upload((args.filesource, args.filedest))
