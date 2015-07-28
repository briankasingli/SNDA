require 'test_helper'

class SignedDocumentsControllerTest < ActionController::TestCase
  setup do
    @signed_document = signed_documents(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:signed_documents)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create signed_document" do
    assert_difference('SignedDocument.count') do
      post :create, signed_document: { document_id: @signed_document.document_id, signer_name: @signed_document.signer_name, signer_signature: @signed_document.signer_signature }
    end

    assert_redirected_to signed_document_path(assigns(:signed_document))
  end

  test "should show signed_document" do
    get :show, id: @signed_document
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @signed_document
    assert_response :success
  end

  test "should update signed_document" do
    patch :update, id: @signed_document, signed_document: { document_id: @signed_document.document_id, signer_name: @signed_document.signer_name, signer_signature: @signed_document.signer_signature }
    assert_redirected_to signed_document_path(assigns(:signed_document))
  end

  test "should destroy signed_document" do
    assert_difference('SignedDocument.count', -1) do
      delete :destroy, id: @signed_document
    end

    assert_redirected_to signed_documents_path
  end
end
