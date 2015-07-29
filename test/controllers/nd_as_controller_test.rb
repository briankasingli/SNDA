require 'test_helper'

class NdAsControllerTest < ActionController::TestCase
  setup do
    @nda = ndas(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:ndas)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create nda" do
    assert_difference('Nda.count') do
      post :create, nda: { nda: @nda.nda, user_id: @nda.user_id }
    end

    assert_redirected_to nda_path(assigns(:nda))
  end

  test "should show nda" do
    get :show, id: @nda
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @nda
    assert_response :success
  end

  test "should update nda" do
    patch :update, id: @nda, nda: { nda: @nda.nda, user_id: @nda.user_id }
    assert_redirected_to nda_path(assigns(:nda))
  end

  test "should destroy nda" do
    assert_difference('Nda.count', -1) do
      delete :destroy, id: @nda
    end

    assert_redirected_to ndas_path
  end
end
