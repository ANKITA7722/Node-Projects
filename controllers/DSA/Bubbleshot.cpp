#include<iostream>
using namespace std;
int main()
{
    int arr[]={1,2,4,5,6};
    int s=sizeof(arr)/sizeof(arr[0]);
    int temp;
    for(int i=0;i<s;i++)
    {
        cout<<arr[i]<<"\t";
    }
    cout<<"\n after bubble short \n";
    for(int i=0;i<s;i++)
    {
        for(int j=0;j<s-1;j++)
        {
            if(arr[i]>arr[j+1])
            {
                temp=arr[j+1];
                arr[j+1] = arr[i];
                arr[i]= temp;
            }
        }
    }
    for(int i=0;i<s;i++)
    {
        cout<<arr[i]<<"\t";
    }
}