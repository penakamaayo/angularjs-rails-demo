class StaticPagesController < ApplicationController

  def example1
    @layout1 =
"%label Name:
  = text_field_tag :text, nil, :id => 'js-text-input1'

  %h2
    Hello
    = succeed '!' do
      %span#js-name-div1


  :javascript
    var textInputElement = document.getElementById('js-text-input'),
    nameDivElement = document.getElementById('js-name-div');

    textInputElement.addEventListener('keyup', function(){
      var text = textInputElement.value;
      nameDivElement.innerHTML = text;
    });
"

          @layout2 =
"%label Name:
  = text_field_tag :text, nil, :id => 'js-text-input2'

  %h2
    Hello
    = succeed '!' do
      %span#js-name-div2
    :javascript
      $('#js-text-input2').on('keyup', function(){
        $('#js-name-div2').html($('#js-text-input2').val());
      });
"
  end


  def example2
  end


  def example3
  end


  def example4
  end


  def example5
  end


  def example6
  end

end
