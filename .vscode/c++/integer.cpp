#include <iostream>
using namespace std;
/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main() {
	int first_number,second_number,sum;
	cout<<"Enter two integers:";
	cin>>first_number>>second_number;
	sum= first_number + second_number;
	cout<<first_number << "+" <<
	second_number << "=" <<sum;
	return 0;
}
