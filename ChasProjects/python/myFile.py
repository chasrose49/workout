import sys
# result = {'name':"chas"}
# print(result)
# example customer objects
customer1 = {'id': 'abc123', 'full_name': 'Master Yoda'}
customer2 = {'id': 'def456', 'full_name': 'Obi-Wan Kenobi'}
customer3 = {'id': 'ghi789', 'full_name': 'Anakin Skywalker'}

# or collect them in a list
customers = [customer1, customer2, customer3]
# or maybe within a dictionary, they have a unique id after all

for customer in customers:
    # print(customer)
    print(customer['id'])
    print(customer['full_name'])
    
yoda={customer1}
print(yoda)
sys.stdout.flush()